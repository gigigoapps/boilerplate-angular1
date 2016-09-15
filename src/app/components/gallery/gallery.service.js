import Base from 'app/utils/base';

export default class GalleryService extends Base {
    constructor(ApiService) {
        super(__filename,arguments);
    }
    getPhotos() {
        return this.ApiService.request({
            method: 'get',
            url: '/photos'
        })
    }


}
