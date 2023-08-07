/** @type {import('next').NextConfig} */


const nextConfig = {
  
     experimental: {
         outputFileTracingExcludes: {
             "/*": ["./public/content/process/**/Build/"],
             "/**/*": ["./public/content/process/**/Build/"],
         },
     },
 };
 
 module.exports = nextConfig;
















module.exports = nextConfig






