import {unlink} from 'node:fs';

unlink('./abc.html', () => {
    console.log('File deleted')
});