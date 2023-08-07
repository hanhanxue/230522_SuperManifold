/** @type {import('next').NextConfig} */


const nextConfig = {
  
     experimental: {
         outputFileTracingExcludes: {
             "/*": ["./public/content/process/**/*"],
             "/**/*": ["./public/content/process/**/*"],
         },
     },
 };
 
 module.exports = nextConfig





