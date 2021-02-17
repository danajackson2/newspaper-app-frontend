import React from 'react'

function ViewArticleChoice({articles, currentView, changeCurrent}){
    // destructure the article!?
    // let title, author, description = {...articles[currentView]}
    return (
        <div className={'container'} style={{padding: '10px'}}>
            <div className='row'>
                <button style={{height: '40px', alignSelf:'center'}} className={"btn-outline-secondary btn btn-lg col-1"} onClick={() => changeCurrent('down')}>⬅</button>
                <div className={'col-10'} style={{borderColor: 'black', borderStyle:'solid', borderWidth:'1px', borderRadius:'3px', height:'260px',padding: '5px', backgroundColor:'#eee2d6', overflow:'hidden', textOverflow: 'ellipsis'}}>
                    <h4>{articles[currentView].webTitle === '' ? 'No title' : articles[currentView].webTitle}</h4>
                    <h4>{articles[currentView].fields.byline === '' ? 'No author' : articles[currentView].fields.byline}</h4>
                    <p>{articles[currentView].fields.bodyText === '' ? 'No article summary' : articles[currentView].fields.bodyText}</p>
                    {/* <h4>{title === '' ? 'No title' : title}</h4>
                    <h4>{author === '' ? 'No author' : author}</h4>
                    <p>{description === '' ? 'No article summary' : description}</p> */}
                </div>
                <button style={{height: '40px', alignSelf:'center'}} className={"btn-outline-secondary btn btn-lg col-1"} onClick={() => changeCurrent('up')}>⮕</button>
            </div>
        </div>
    )
}

export default ViewArticleChoice