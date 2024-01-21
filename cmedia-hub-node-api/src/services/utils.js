// Helper Functions
const path = require('path');
const fs = require('fs').promises;
const mimeTypes = require('mime-types');                                                       
const sharp = require('sharp');
const util = require('util');
const readdirAsync = util.promisify(fs.readdir);
const ffmpeg = require('fluent-ffmpeg');

  const mapMimeTypeToCategory = (mimeType) => {
    if (mimeType.startsWith('image')) {
      return 'image';
    } else if (mimeType.startsWith('audio')) {
      return 'audio';
    } else if (mimeType.startsWith('video')) {
      return 'video';
    } else if (
      mimeType === 'application/pdf' ||
      mimeType === 'application/x-tar' ||
      mimeType === 'application/x-gzip' ||
      mimeType === 'application/x-bzip2'
    ) {
      return 'document';
    } else if (mimeType === 'application/zip') {
      return 'archive';
    } else {
      return 'document'; // You can adjust this to handle other cases
    }
  };
  const mapMimeTypeToMediaType = (mimeType) => {
    return mapMimeTypeToCategory(mimeType);
  };
  const getDestinationDirectory = (mimeType) => {
    return mapMimeTypeToCategory(mimeType);
  };
  const getContentType = (fileExtension) => {
  // Use mime-types library for more comprehensive mapping
  const mimeType = mimeTypes.lookup(fileExtension);

  // If the mime type is found, return it; otherwise, default to binary data
  return mimeType || 'application/octet-stream';
  };
  const generateThumbnails = async (file, options = {}) => {
    try {
      if (!file) {
        throw new Error('>>>>>>>>>>>>>>#Invalid input: File object is missing or invalid>>>>>>>>>>>>>>#');
      }
  
      const {
        sizes = [
          { width: 1280, height: 720, folder: 'landscape' },
          { width: 250, height: 375, folder: 'portrait' },
        ],
        thumbnailDirectory,
        quality = 90,
      } = options;
  
      const baseFileName = path.parse(file.filename).name;
  
      const generateThumbnail = async (size) => {
        const thumbnailFolder = path.join(thumbnailDirectory, size.folder);
        await fs.mkdir(thumbnailFolder, { recursive: true });
      
        const thumbnailFileName = `thumb_${baseFileName}.png`;
        const thumbnailFilePath = path.join(thumbnailFolder, thumbnailFileName);
      
        const thumbnailBuffer = await sharp(file.path)
          .resize(size.width, size.height, { fit: 'fill', })
          .png({ quality })
          .toBuffer();
      
        await fs.writeFile(thumbnailFilePath, thumbnailBuffer);
      
        console.log(`>>>>>>>>>>>>>>#Thumbnail saved for size ${size.width}x${size.height}:`, thumbnailFilePath, '>>>>>>>>>>>>>>#');
      
        return thumbnailFileName;
      };
      
  
      const thumbnailPromises = sizes.map(generateThumbnail);
      const thumbnails = await Promise.all(thumbnailPromises);
  
  
      // Prioritize returning the portrait thumbnail by default
      const portraitThumbnailIndex = sizes.findIndex(size => size.folder === 'portrait');
      const defaultThumbnailIndex = portraitThumbnailIndex !== -1 ? portraitThumbnailIndex : 0;
  
      return thumbnails[defaultThumbnailIndex];
    } catch (error) {
      console.error(`>>>>>>>>>>>>>>#Error generating thumbnails: ${error.message}>>>>>>>>>>>>>>#`);
      return getDefaultThumbnail(file.mimetype);
    }
  };
  const getDefaultThumbnail = (mimeType) => {
    const defaultThumbnails = {
      //  Image types
      'image.png': 'default_image_thumbnail.png',
      'image/png': 'default_image_thumbnail.png',
      'image/gif': 'default_image_thumbnail.png',
      'image/bmp': 'default_image_thumbnail.png',
      'image/webp': 'default_image_thumbnail.png',
      'image/tiff': 'default_image_thumbnail.png',
      'image/svg+xml': 'default_image_thumbnail.png',
      'image/x-icon': 'default_image_thumbnail.png',
      'image/vnd.wap.wbmp': 'default_image_thumbnail.png',
      'image/jp2': 'default_image_thumbnail.png',
      'image/vnd.adobe.photoshop': 'default_image_thumbnail.png',

      // video types
      'video/mp4': 'default_video_thumbnail.png',
      'video/webm': 'default_video_thumbnail.png',
      'video/quicktime': 'default_video_thumbnail.png',
      'video/x-msvideo': 'default_video_thumbnail.png',
      'video/x-matroska': 'default_video_thumbnail.png',
      'video/3gpp': 'default_video_thumbnail.png',
      'video/3gpp2': 'default_video_thumbnail.png',
      'video/h261': 'default_video_thumbnail.png',
      'video/h263': 'default_video_thumbnail.png',
      'video/h264': 'default_video_thumbnail.png',
      'video.png': 'default_video_thumbnail.png',
      'video/jpm': 'default_video_thumbnail.png',
      'video/mj2': 'default_video_thumbnail.png',
      'video/mp2t': 'default_video_thumbnail.png',
      'video/mp4v-es': 'default_video_thumbnail.png',
      'video/mpeg': 'default_video_thumbnail.png',
      'video/mpeg4-generic': 'default_video_thumbnail.png',
      'video/nv': 'default_video_thumbnail.png',
      'video/ogg': 'default_video_thumbnail.png',
      'video/parityfec': 'default_video_thumbnail.png',
      'video/pointer': 'default_video_thumbnail.png',
      'video/quicktime': 'default_video_thumbnail.png',
      'video/smpte292m': 'default_video_thumbnail.png',
      'video/smpte292m': 'default_video_thumbnail.png',
      'video/ulpfec': 'default_video_thumbnail.png',
      'video/vc1': 'default_video_thumbnail.png',
      'video/vnd.dece.hd': 'default_video_thumbnail.png',
      'video/vnd.dece.mobile': 'default_video_thumbnail.png',
      'video/vnd.dece.pd': 'default_video_thumbnail.png',
      'video/vnd.dece.sd': 'default_video_thumbnail.png',
      'video/vnd.dece.video': 'default_video_thumbnail.png',
      'video/vnd.dvb.file': 'default_video_thumbnail.png',
      'video/vnd.fvt': 'default_video_thumbnail.png',
      'video/vnd.mpegurl': 'default_video_thumbnail.png',
      'video/vnd.ms-playready.media.pyv': 'default_video_thumbnail.png',
  

      // Audio types
     
    // Additional audio types
    'audio/aac': 'default_audio_thumbnail.png',
    'audio/flac': 'default_audio_thumbnail.png',
    'audio/opus': 'default_audio_thumbnail.png',
    'audio/x-ms-wma': 'default_audio_thumbnail.png',
    'audio/x-wav': 'default_audio_thumbnail.png',
    'audio/x-mpegurl': 'default_audio_thumbnail.png',
    'audio/x-scpls': 'default_audio_thumbnail.png',
    'audio/x-wavpack': 'default_audio_thumbnail.png',
    'audio/x-la': 'default_audio_thumbnail.png',
    'audio/x-pn-realaudio': 'default_audio_thumbnail.png',
    'audio/x-pn-realaudio-plugin': 'default_audio_thumbnail.png',
    'audio/x-tta': 'default_audio_thumbnail.png',
    'audio/x-aiff': 'default_audio_thumbnail.png',
    'audio/x-flac': 'default_audio_thumbnail.png',
    'audio/x-m4a': 'default_audio_thumbnail.png',
    'audio/x-ms-asx': 'default_audio_thumbnail.png',
    'audio/x-ms-wax': 'default_audio_thumbnail.png',
    'audio/x-ms-wvx': 'default_audio_thumbnail.png',
    'audio/x-musepack': 'default_audio_thumbnail.png',
    'audio/x-s3m': 'default_audio_thumbnail.png',
    'audio/x-voc': 'default_audio_thumbnail.png',
    'audio/x-vorbis+ogg': 'default_audio_thumbnail.png',
    'audio/x-xm': 'default_audio_thumbnail.png',
    'audio/x-it': 'default_audio_thumbnail.png',
    'audio/x-mod': 'default_audio_thumbnail.png',
    'audio/x-midi': 'default_audio_thumbnail.png',
    'audio/x-realaudio': 'default_audio_thumbnail.png',
    'audio/x-adpcm': 'default_audio_thumbnail.png',
    'audio/x-ape': 'default_audio_thumbnail.png',
    'audio/x-aac': 'default_audio_thumbnail.png',
    // Document types
    'application/pdf': 'default_pdf_thumbnail.png',
    'application/msword': 'default_word_thumbnail.png',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'default_word_thumbnail.png',
    'application/vnd.ms-excel': 'default_excel_thumbnail.png',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'default_excel_thumbnail.png',
    'application/vnd.ms-powerpoint': 'default_document_thumbnail.ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'default_presentation_thumbnail.png',
    'application/x-rar-compressed': 'default_rar_thumbnail.png',
      'application/x-tar': 'default_tar_thumbnail.png',
      'application/x-gzip': 'default_gz_thumbnail.png',
      'application/x-bzip2': 'default_archive_thumbnail.png',
      'application/x-rar-compressed': 'default_rar_thumbnail.png',
      'application/x-7z-compressed': 'default_7z_thumbnail.png',
      'application/x-tar-gz': 'default_tar_gz_thumbnail.png',
      'application/x-zip-compressed': 'default_zip_thumbnail.png',
      'application/x-iso9660-image': 'default_iso_thumbnail.png',
      'application/x-cpio': 'default_cpio_thumbnail.png',
      'application/x-shar': 'default_shar_thumbnail.png',
      'application/x-ace-compressed': 'default_ace_thumbnail.png',
      'application/x-stuffit': 'default_stuffit_thumbnail.png',
      'application/x-lzip': 'default_lzip_thumbnail.png',
      'application/x-rpm': 'default_rpm_thumbnail.png',
      'application/x-arj': 'default_arj_thumbnail.png',
      'application/x-deb': 'default_deb_thumbnail.png',
      'application/x-afio': 'default_afio_thumbnail.png',
      'application/x-sit': 'default_sit_thumbnail.png',
      'application/x-sd2': 'default_sd2_thumbnail.png',
      'application/x-cabinet': 'default_cabinet_thumbnail.png',
  
      // Archive types
      'application/zip': 'default_zip_thumbnail.png',
      'application/x-tar': 'default_tar_thumbnail.png',
      'application/x-gzip': 'default_gz_thumbnail.png',
      'application/x-bzip2': 'default_archive_thumbnail.png',
      'application/x-7z-compressed': 'default_7z_thumbnail.png',
      'application/x-tar-gz': 'default_tar_gz_thumbnail.png',
  
    };
  
    // Get the default thumbnail filename for the given MIME type
    const defaultThumbnailFilename = defaultThumbnails[mimeType] || 'default_media_thumbnail.png';
  
    // Return the default thumbnail filename
    return defaultThumbnailFilename;
  }; 
  const getVideoDurationAndThumbnails = async (file, options = {}) => {
    try {
      const filePath = path.join(__dirname, '..', '..', file.path);
  
      // Use the ffprobe method with a Promise to get video duration
      const { format: { duration } } = await new Promise((resolve, reject) => {
        ffmpeg()
          .input(filePath)
          .ffprobe((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
      });
  
      // Generate a random timestamp between 2% and 95% of the video duration
      const randomTimestamp = `${Math.random() *(0.8 - 0.4) + 0.4}%`;
  
      // Sizes and folders to generate thumbnails
      const {
        sizes = [
          { width: 1280, height: 720, folder: 'landscape' },
          { width: 250, height: 375, folder: 'portrait' },
        ],
        thumbnailDirectory,
      } = options;
  
      const baseFileName = path.parse(file.filename).name;
  
      const generateThumbnail = async (size) => {
        const thumbnailFolder = path.join(thumbnailDirectory, size.folder);
        await fs.mkdir(thumbnailFolder, { recursive: true });
        const thumbnailFileName = `thumb_${baseFileName}.png`;
        // const thumbnailFileName = `thumb_${baseFileName}_${size.width}x${size.height}.png`;

  
        return new Promise((resolve, reject) => {
          console.log(`>>>>>>>>>>>>>>#Generating video thumbnail for size ${size} >>>>>>>>>>>>>>#`);
          ffmpeg()
            .input(filePath)
            .screenshot({
              timestamps: [randomTimestamp],
              folder: thumbnailFolder,
              filename: thumbnailFileName,
              size: `${size.width}x${size.height}`,
              fit: 'fill',
              // ...options.screenshot,
            })
            .on('end', () => {
              console.log(`>>>>>>>>>>>>>>#Thumbnail generated successfully for size ${size}`, '>>>>>>>>>>>>>>#');
              resolve(thumbnailFileName);
            })
            .on('error', (err) => {
              console.error(`>>>>>>>>>>>>>>#Failed to generate thumbnail for size ${size}:`, err, '>>>>>>>>>>>>>>#');
              reject(err);
            });
        });
      };
  
      const thumbnailPromises = sizes.map(generateThumbnail);
      const thumbnails = await Promise.all(thumbnailPromises);
  
      // Log success for each thumbnail
      thumbnails.forEach((thumbnail, index) => {
        const size = sizes[index];
        console.log('>>>>>>>>>>#Success: Thumbnail for size:', size.width, 'x', size.height, ' - ', thumbnail, '>>>>>>>>>>>>>>#');
      });
  
      // Find the index of the portrait and landscape thumbnails
      const portraitIndex = sizes.findIndex((size) => size.folder === 'portrait');
      const landscapeIndex = sizes.findIndex((size) => size.folder === 'landscape');
  
      if (portraitIndex !== -1 && landscapeIndex !== -1) {
        // Return the filenames of both portrait and landscape thumbnails
        return {
          duration,
          portraitThumbnail: thumbnails[portraitIndex],
          landscapeThumbnail: thumbnails[landscapeIndex],
        };
      } else {
        console.error('>>>>>>>>>>>>>>#Portrait or landscape thumbnail not found in the thumbnails array.>>>>>>>>>>>>>>>>#');
        throw new Error('>>>>>>>>>>>>>>#Portrait or landscape thumbnail not found.>>>>>>>>>>>#');
      }
    } catch (error) {
      console.error('>>>>>>>>>>>>#Error processing video to get duration and generate thumbnails:', error.message, '>>>>>>>>>>>>>>#');
      throw error;
    }
  };
  const getMediaDurationAndThumbnails = async (file) => {
    // base thumbnail directory
    const thumbnailDirectory = path.join(__dirname, '..', '..', 'media_files', 'thumbnails');
  
    await fs.mkdir(thumbnailDirectory, { recursive: true });

    try {
      const type = mapMimeTypeToMediaType(file.mimetype);

      if (type === 'image') {
        return { duration: 0, thumbnail: await generateThumbnails(file,  options = {thumbnailDirectory:thumbnailDirectory,}) };
      }

      if (type === 'document' || type === 'archive') {
        return { duration: 0, thumbnail: getDefaultThumbnail(file.mimetype) };
      }

      if (type === 'audio') {
        return { duration: await getAudioDuration(file), thumbnail: await getDefaultThumbnail(file.mimetype)}
      };

      if (type === 'video') {
      console.log('>>>>>>>>>>>>#generating video Thumbnail>>>>>>>>>>>>#')

      const { duration, portraitThumbnail } = await getVideoDurationAndThumbnails(file,  options = {thumbnailDirectory:thumbnailDirectory,});
        // const { duration, landscapeThumbnail, portraitThumbnail } = await getVideoDurationAndThumbnails(file);

        return { duration, thumbnail: portraitThumbnail  };
      }
      // Handle other types or return default values
      // return { duration: 0, thumbnail: getDefaultThumbnail(file.mimetype) };
    } catch (error) {
      console.log(error);
      // Handle errors as needed
      console.log('>>>>>>>>>>>#failed to generate Thumbnail>>>>>>>>>>>>#');

      // return { duration: 0, thumbnail: 'default_media_thumbnail.png' };
    }
  };
  const getAudioDuration = async (file) => {
    try {
      const filePath = path.join(__dirname, '..', '..', file.path);

      // Use the ffprobe method with a Promise to get audio duration
      const { format: { duration }, streams } = await new Promise((resolve, reject) => {
        ffmpeg()
          .input(filePath)
          .ffprobe((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
      });
  
      // Check if the file is audio
      const isAudio = streams.some((stream) => stream.codec_type === 'audio');
  
      if (!isAudio) {
        throw new Error('>>>>>>>>>>>>>>>>>>>>>#The provided file is not an audio file.>>>>>>>>>>>>>>>>#');
      }
  
      return duration;
    } catch (error) {
      console.error('>>>>>>>>>>>>>>#Error getting audio duration:', error.message, '>>>>>>>>>>>>>>>>#');
      throw error;
    }
  };
  const getHumanReadableSize = (sizeInBytes) => {
    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;
  
    if (sizeInBytes < KB) {
      return `${sizeInBytes} B`;
    } else if (sizeInBytes < MB) {
      return `${(sizeInBytes / KB).toFixed(2)} KB`;
    } else if (sizeInBytes < GB) {
      return `${(sizeInBytes / MB).toFixed(2)} MB`;
    } else {
      return `${(sizeInBytes / GB).toFixed(2)} GB`;
    }
  };
  const getHumanReadableDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.round(durationInSeconds % 60);
  
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);
  
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  };
   
  
module.exports = {
   getContentType,
    getDestinationDirectory,
    mapMimeTypeToCategory,
    mapMimeTypeToMediaType,
    generateThumbnails,
    getMediaDurationAndThumbnails,
    getHumanReadableSize,
    getHumanReadableDuration,
    getAudioDuration,
  }; 