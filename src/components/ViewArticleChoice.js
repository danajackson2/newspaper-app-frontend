import React from 'react'

function ViewArticleChoice({articles, currentView, changeCurrent}){
    return (
        <div class='container'>
            <div class='row'>
                <button class="btn btn-sm btn-outline-primary col-2" onClick={() => changeCurrent('down')} className='left-arrow'>⬅</button>
                <div class='col-8'>
                    {articles[currentView].title}
                    {articles[currentView].author}
                    {articles[currentView].description}
                </div>
                <button class="btn btn-sm btn-outline-primary col-2" onClick={() => changeCurrent('up')} className='right-arrow'>⮕</button>
            </div>
        </div>
    )
}

export default ViewArticleChoice