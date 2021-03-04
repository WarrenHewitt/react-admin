import React from 'react';
import { useSelector }  from 'react-redux'

import { selectCount  } from '@/store/slice/todo'

function PageStore () {
    const states =  useSelector(selectCount)

    console.log('-----', states)

    return (<div>
        <h1>pageStore</h1>
        <h1>{ states }</h1>
    </div>)

}

export default PageStore