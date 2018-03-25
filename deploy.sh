ng build --prod
scp -r dist NodeServer:./foodX/
scp -r server NodeServer:./foodX/
scp -r server.js NodeServer:./foodX/