
import React ,{Component}from "react"
export default class Multifileupload extends Component{
    fileObj=[];
    fileArray=[];
    constructor(props){
    super(props);
    this.state={
    file:[null]
     }
    this.uploadMultipleFiles=this.uploadMultipleFiles.bind(this);
    this.uploadFiles=this.uploadFiles.bind(this);
    }
    uploadMultipleFiles(event){
    this.fileObj.push(event.target.file);
    for(i=0;i<this.fileObj[0].length;i++){
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({
        file:this.fileArray
    })
    }
    uploadFiles(event){
        event.preventDefault();
        console.log(this.state.file);

    }

    render(){
        return( 
    <div>
    <form>
    <div className="form-group multi-preview">
    {(this.fileArray || []).map(url => (<img src={url} alt=""title="" className="img-thumbnail w-25"/>
    ))
    }
    </div>
           
    <div className="form-group"> 
    <input type="file"  className="form-change" onChange={this.uploadMultipleFiles} 
    multiple/>
    <button type="button" className="btn-btn-primary" onClick={this.uploadFiles}>upload</button>
        </div>
        </form>
        </div>
        )
    }
}