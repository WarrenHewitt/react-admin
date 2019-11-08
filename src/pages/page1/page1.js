import { useParams } from 'react-router-dom';

const Page1 = () => {
    const { id } = useParams();
    const str = 'page1' + id 
    return str;
}  

export default Page1;