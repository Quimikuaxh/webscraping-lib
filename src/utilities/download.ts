import fs from 'fs';
import request from 'request';

class Download {
    static downloadFile(uri: string, filename: fs.PathLike, callback: { (): void; (): void; }){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        request.head(uri, function(_err, _res, _body){
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    }
}

export default Download;