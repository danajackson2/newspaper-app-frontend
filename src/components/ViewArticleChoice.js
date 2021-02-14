import React from 'react'

function ViewArticleChoice({articles, currentView, changeCurrent}){
    return (
        <div className={'container'} style={{padding: '10px'}}>
            <div class='row'>
                <button style={{height: '40px', alignSelf:'center'}} className={"btn-outline-secondary btn btn-lg col-1"} onClick={() => changeCurrent('down')}>⬅</button>
                <div className={'col-10'} style={{borderColor: 'black', borderStyle:'solid', borderWidth:'1px', borderRadius:'3px', height:'260px',padding: '5px', backgroundColor:'#eee2d6'}}>
                    <h4>{articles[currentView].title}</h4>
                    <h4>{articles[currentView].author}</h4>
                    <p>{articles[currentView].description}</p>
                </div>
                <button style={{height: '40px', alignSelf:'center'}} className={"btn-outline-secondary btn btn-lg col-1"} onClick={() => changeCurrent('up')}>⮕</button>
            </div>
        </div>
    )
}

export default ViewArticleChoice