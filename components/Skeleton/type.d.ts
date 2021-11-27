

// 每一行的子行配置项
export type childRowItems = {
    style?: {
        [propName: string]: string | number
    }
}

// 每一行列元素配置项
export type colItems = {
    style?: {
        [propName: string]: string | number
    },
    shape?: 'circle' | 'round',
    childRowItems?: Array<childRowItems>
}

export interface ISkeletonRowsItem {
    // 一行的对齐方式,同flex横向布局(justify-content)
    align?: 'left' | 'center' | 'right' | 'between' | 'around',
    // 垂直对齐方式,同flex的垂直布局(align-items)
    verticalAlign?: 'top' | 'middle' | 'bottom',
    // css 样式
    style?: {
        [propName: string]: string | number
    },
    // 一行中的列元素,可以是数字(会自动平反宽度),也可以每一项单独配置
    colItems?: Array<colItems> | number,
}



export type ISkeletonRowList = Array<ISkeletonRowsItem>