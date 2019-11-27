import React, {Component} from 'react';

class Breadcrumb extends Component {
    constructor(props){
        super(props);
    }

    renderChildren=(props)=> {


        //遍历所有子组件
        return React.Children.map(props.children, child => {
            if (child.type === "BreadcrumbItem")
                return React.cloneElement(child, {
                    //把父组件的props.name赋值给每个子组件
                    separator: props.separator
                })


            else
                return child


        })
    }

    render() {
        console.log(this);


        return (
            <div className={"xg-breadcrumb"}>

                    {React.Children.map(this.props.children, (child, index) => {
                            return React.cloneElement(child, {

                                separator: this.props.separator
                            });
                        })}

                {/*方法二*/}
                {/*{
                    this.props.children.map((v,k)=>{
                        return(
                            <v.type key={k} children={v.props} separator={this.props.separator}></v.type>
                        )
                    })
                }*/}


            </div>
        );
    }
}

export default Breadcrumb;