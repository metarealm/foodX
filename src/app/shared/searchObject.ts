


export class SearchObject {
    private _pageNum : number =0;
    private _searchTerm : string;
    private _noOfRow: number=12;

    constructor(pageNum:number , searchTerm:string){
        this._pageNum = pageNum;
        this._searchTerm = searchTerm;
    }
    get pageNum(){
        return this._pageNum;
    }
    get searchTerm(){
        return this._searchTerm;
    }
    get noOfRow(){
        return this._noOfRow;
    }

}