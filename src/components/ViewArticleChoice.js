import React from 'react'

function ViewArticleChoice({articles, currentView, changeCurrent}){
    return (
        <div className={'container'} style={{padding: '10px'}}>
            <div className='row'>
                <button style={{height: '40px', alignSelf:'center'}} className={"btn-outline-secondary btn btn-lg col-1"} onClick={() => changeCurrent('down')}>⬅</button>
                <div className={'col-10'} style={{borderColor: 'black', borderStyle:'solid', borderWidth:'1px', borderRadius:'3px', height:'260px',padding: '5px', backgroundColor:'#eee2d6', overflow:'hidden', textOverflow: 'ellipsis'}}>
                    <h3>{articles[currentView].webTitle === '' ? 'No title' : articles[currentView].webTitle}</h3>
                    <h4>{articles[currentView].fields.byline === '' ? 'No author' : articles[currentView].fields.byline}</h4>
                    <p>{articles[currentView].fields.bodyText === '' ? 'No article summary' : articles[currentView].fields.bodyText}</p>
                </div>
                <button style={{height: '40px', alignSelf:'center'}} className={"btn-outline-secondary btn btn-lg col-1"} onClick={() => changeCurrent('up')}>⮕</button>
            </div>
        </div>
    )
}

export default ViewArticleChoice