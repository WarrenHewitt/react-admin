import React, { FC }  from 'react';
import { Button } from 'antd';

export interface HomeProps {
    name ?: string
}

export const Home: FC<HomeProps> = props => {
    return <div>
        <h1>home page</h1>
        <Button >nihao</Button>
    </div>
};