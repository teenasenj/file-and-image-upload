
import React,{Component} from "react";

export default class MultiFileUpload extends Component{
         fileObj=[];
         fileArray=[];

         constructor(props){
             super(props)
             this.state={
             file:[null]
                       }
                        this.uploadMultipleFiles=this.uploadMultipleFiles.bind(this);
                        this.uploadFiles=this.uploadFiles. bind(this);
                }
              uploadMultipleFiles(event){
                  this.fileObj.push(event.target.files);
                  for(let i=0;i< this.fileObj[0].length;i++){
                        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
                  }
                  this.setState({
                        file:this.fileArray
                  })
              }

              uploadFiles(event){
                  event.preventDefault();
                  console.log(this.state.file)
              }

        render(){
              return(
                    <div>
                    <form>
                         <div className="form-group multi-preview ">
                                {/*Upload file preview */}
                                {(this.fileArray ||[]).map(url=>(
                                    <img src={url} alt="sample pics" className="img-thumbnail ms-5 w-25"/>
                                ))}
                                </div>

                                <div className="form-group ">
                                <input type="file" className="form-control w-25 mt-5 ms-5" 
                                onChange={this.uploadMultipleFiles} multiple/>

                                <button type="button" className="btn btn-warning mt-5 ms-5" 
                                onClick={this.uploadFiles}>Upload</button>
                          </div>
                    </form>
                     </div>
                )
}
}

