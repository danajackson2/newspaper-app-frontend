import React from 'react'

function ViewArticleChoice({articles, currentView, changeCurrent}){
    return (
        <div>
            <button onClick={() => changeCurrent('down')} className='left-arrow'>⬅</button>
            <div>
                {articles[currentView].title}
                {articles[currentView].author}
                {articles[currentView].description}
            </div>
            <button onClick={() => changeCurrent('up')} className='right-arrow'>⮕</button>
        </div>
    )
}

export default ViewArticleChoice