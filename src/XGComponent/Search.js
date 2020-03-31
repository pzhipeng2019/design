import React, {Component} from 'react';
import Input from "./Input";
import Icon from "./Icon";
import Button from "./Button";

class Search extends Component {
    render() {
        const {style, placeholder, onSearch, enterButton,size,loading} = this.props;
        let sizeClass=""
        if(size==="large"){
            sizeClass=" xg-input-search-large xg-input-group-wrapper-lg"
        }else if(size==="small"){
            sizeClass=" xg-input-search-sm xg-input-group-wrapper-sm"
        }
        if(enterButton){
            return (
                <span className={"xg-input-search xg-input-search-enter-button xg-input-group-wrapper"+(size?sizeClass:'')} style={style}>
                    <span className="xg-input-wrapper xg-input-group">
                        <Input placeholder={placeholder} size={size}/>
                        <span className="xg-input-group-addon"><Button ButtonData={{size:size,type:"xg-btn-primary xg-input-search-button"}} icon={loading?"icon-loading anticon-spin":"icon-search"}/></span>
                    </span>


            </span>
            );
        }else{
            return (
                <span className="xg-input-search xg-input-affix-wrapper" style={style}>
                    <Input placeholder={placeholder}/>
                    <span className="xg-input-suffix"><Icon title={loading?"icon-loading anticon-spin":"icon-search"} onChange={onSearch}/></span>
                </span>
            );
        }

    }
}

export default Search;