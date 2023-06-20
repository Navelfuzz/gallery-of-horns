import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';

class Main extends React.Component{
    render(){
        return(
            <>
                <h2>The Beasts:</h2>
                    <main>
                        {data.map(beastObj => {
                            return <HornedBeast title={beastObj.title} image_url={beastObj.image_url}/>
                        })}
                    </main>
            </>
        )
    }
}
export default Main;