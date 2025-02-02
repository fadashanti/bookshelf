"use client"
import React, { useRef, useState } from 'react';
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import Image from 'next/image';
import { useToast } from "@/hooks/use-toast"

const {
  env: {
    imagekit: {
      publicKey,
      urlEndpoint,
    }
  }
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    const { signature, token, expire } = data;

    return {
      token,
      expire,
      signature,
    };

  } catch (error: any) {
    throw new Error(`Authrntication request failed: ${error.statusText}`);
  }
}

const ImageUpload = ({ onFileChange }: { onFileChange: (filePath: string) => void}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const { toast } = useToast()

  const onError = (error: any) => {
    console.log(error);

    toast({
      title: "Image upload failed", 
      description: "Unable to upload the image",
      variant: "destructive"
    })
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: "Image uploaded successfully", 
      description: `${res.filePath} has been uploaded successfully`,
    })
  };

  return ( 
    <ImageKitProvider 
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        fileName="universityCard"
        useUniqueFileName={true}
        isPrivateFile={false}
        tags={["universityCard"]}
        folder="cards"
        onError={onError}
        onSuccess={onSuccess}
      />

      <button className="upload-btn" onClick={(e) => {
        e.preventDefault();

        if (ikUploadRef.current) {
          // @ts-ignore
          ikUploadRef.current?.click();
        }
      }}>
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className='object-contain'
        />
        <p className='text-base text-light-100'>Upload your card</p>

        {file && <p className='upload-filename'>{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
}

export default ImageUpload;