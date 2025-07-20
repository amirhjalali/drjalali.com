'use client';

import { useState, useRef } from 'react';
import { Upload, Camera, Check, X } from 'lucide-react';

interface PhotoUploadProps {
  onPhotoSelect?: (file: File) => void;
  currentPhotoUrl?: string;
  maxSizeMB?: number;
  acceptedFormats?: string[];
}

export default function PhotoUpload({ 
  onPhotoSelect,
  currentPhotoUrl,
  maxSizeMB = 5,
  acceptedFormats = ['image/jpeg', 'image/png', 'image/webp']
}: PhotoUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentPhotoUrl || null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    setError(null);

    // Check file type
    if (!acceptedFormats.includes(file.type)) {
      setError(`Please upload a valid image file (${acceptedFormats.map(f => f.split('/')[1]).join(', ')})`);
      return false;
    }

    // Check file size
    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > maxSizeMB) {
      setError(`File size must be less than ${maxSizeMB}MB. Current size: ${sizeMB.toFixed(1)}MB`);
      return false;
    }

    return true;
  };

  const handleFile = async (file: File) => {
    if (!validateFile(file)) return;

    setUploading(true);
    setError(null);

    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Call the callback if provided
      if (onPhotoSelect) {
        await onPhotoSelect(file);
      }

      setUploading(false);
    } catch (err) {
      setError('Failed to process the image. Please try again.');
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const clearPhoto = () => {
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300
          ${dragActive 
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
            : 'border-gray-300 dark:border-neutral-600 hover:border-primary-400 dark:hover:border-primary-500'
          }
          ${uploading ? 'pointer-events-none opacity-75' : ''}
        `}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(',')}
          onChange={handleInputChange}
          className="hidden"
        />

        {/* Upload content */}
        {!preview ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              {uploading ? (
                <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
              ) : (
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100 mb-2">
                Upload Professional Photo
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mb-4">
                Drag and drop or click to select
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-neutral-500">
                <Upload className="w-4 h-4" />
                <span>JPG, PNG up to {maxSizeMB}MB</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Preview */}
            <div className="relative w-32 h-32 mx-auto">
              <img
                src={preview}
                alt="Photo preview"
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-neutral-700 shadow-lg"
              />
              
              {/* Success indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                Photo uploaded successfully!
              </p>
              
              <div className="flex justify-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openFileDialog();
                  }}
                  className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Replace
                </button>
                <span className="text-xs text-gray-400">•</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearPhoto();
                  }}
                  className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-start space-x-2">
            <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
          </div>
        </div>
      )}

      {/* Technical requirements */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-neutral-100 mb-2">
          Photo Requirements
        </h4>
        <ul className="text-xs text-gray-600 dark:text-neutral-400 space-y-1">
          <li>• Square aspect ratio (1:1) recommended</li>
          <li>• Minimum 800x800px resolution</li>
          <li>• Professional attire and lighting</li>
          <li>• Clear, high-quality image</li>
          <li>• Neutral or academic background</li>
        </ul>
      </div>
    </div>
  );
}