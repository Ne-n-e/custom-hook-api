import useFetch from './UseFetch';

const FetchYogaData = () => {
    const [yogaData]=useFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(yogaData); 
    
    return (
        <>
            <h1> Yoga Benefits </h1>
            <ul>
                {yogaData && yogaData.map( (data) => (
                    <li key={data.index} className='list_data_main'>
                        <h3>{data.name}</h3>
                    </li>
                ))}
            </ul>
        </>
    )

    
}

export default FetchYogaData