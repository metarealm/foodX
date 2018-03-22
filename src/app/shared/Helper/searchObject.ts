export class SearchObject {
    private _pageNum : number =0;
    private _searchTerm : string;
    private _noOfRow: number=14;

    constructor(pageNum:number , searchTerm:string){
        this._pageNum = pageNum;
        this._searchTerm = 'recipeTitle:' + '"'+searchTerm + '"';;
    }
    set pageNum(pageNum : number){
        this._pageNum=pageNum;
    }
    set searchTerm(searchTerm : string){
        this._searchTerm='recipeTitle:' + '"'+searchTerm + '"';
    }
    get pageNum():number{
        return this._pageNum;
    }
    get searchTerm(){
        return this._searchTerm;
    }
    get noOfRow(){
        return this._noOfRow;
    }

}