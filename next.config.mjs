/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "frame-ancestors 'self' https://www.rahulgg.in",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
