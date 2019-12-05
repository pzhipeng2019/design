import React, {Component} from 'react';

class AppLayout extends Component {
    static childContextTypes = {
        requestAddOnRenderer: PropTypes.func
    }

    // 用于缓存每个<AddOn />的内容
    addOnRenderers = {}

    // 通过Context为子节点提供接口
    getChildContext () {
        const requestAddOnRenderer = (name) => {
            if (!this.addOnRenderers[name]) {
                return undefined
            }
            return () => (
                this.addOnRenderers[name]
            )
        }
        return {
            requestAddOnRenderer
        }
    }

    render () {
        const {
            children,
            ...restProps
        } = this.props

        if (children) {
            // 以k-v的方式缓存<AddOn />的内容
            const arr = React.Children.toArray(children)
            const nameChecked = []
            this.addOnRenderers = {}
            arr.forEach(item => {
                const itemType = item.type
                if (item.type.displayName === 'AddOn') {
                    const slotName = item.props.slot || '$$default'
                    // 确保内容唯一性
                    if (nameChecked.findIndex(item => item === stubName) !== -1) {
                        throw new Error(`Slot(${slotName}) has been occupied`)
                    }
                    this.addOnRenderers[stubName] = item.props.children
                    nameChecked.push(stubName)
                }
            })
        }

        return (
            <div class="container">
                <header>
                    <Slot name="header"></Slot>
                </header>
                <main>
                    <Slot></Slot>
                </main>
                <footer>
                    <Slot name="footer"></Slot>
                </footer>
            </div>
        )
    }
}

export default AppLayout;