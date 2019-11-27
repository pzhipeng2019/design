import React, {Component} from 'react';

class BreadcrumbItem extends Component {
    constructor(props,separator) {
        super(props);
    }

    render() {

        console.log(this.props)

        return(

                <span>
                    {
                        this.props.href!= undefined ?
                        (<a className={"xg-breadcrumb-link"} href={this.props.href}>{this.props.children}</a>)
                        : this.props.children
                    }
                    {
                        this.props.menu?(<div>{this.props.menu}</div>):""
                    }
                    <span className="xg-breadcrumb-separator">{this.props.separator?this.props.separator:"/"}</span>
                </span>

        )
        /*方法二*/
        /*const {children,href}=this.props.children;

        console.log(children)
        if(href!= undefined){
            return (
                <span>
                    <a className={"xg-breadcrumb-link"} href={href}>
                        {children}
                    </a>
                    <span className="xg-breadcrumb-separator">{this.props.separator?this.props.separator:"/"}</span>

            </span>
            );
        }else{
            return (
                <span>
                    <span className="xg-breadcrumb-link"> {children}</span>
                    <span className="xg-breadcrumb-separator">{this.props.separator?this.props.separator:"/"}</span>
            </span>
            );
        }*/



    }
}

export default BreadcrumbItem;