/** @type {import('next').NextConfig} */
const nextConfig = {
    images:["fdn.gsmarena.com"]
}

module.exports = {
    reactStrictMode: false,
    images: {
       domains: ['www.i.pinimg.com']
    },
    output:"export",
    redirects:async()=>{
      return[
        {
          source:'/user',
          destination:'/',
          permanent:false,
        },
        {
          source:'/users:userid',
          destination:'/',
          permanent:false,
        },
        {
          source:'/admin',
          destination:'/',
          permanent:false,
        }
      ]
    }
  }

module.exports = nextConfig
