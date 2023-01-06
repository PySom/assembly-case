import './search_list.css';


export default function SearchList({searchItems, total}){
    return (<div>
        <h5 className='count'>Total Count: {total}</h5>
        <div className='cards'>
            {searchItems.map((item) => <SearchItem key={item.id} searchItem={item} />)}
        </div>
    </div>)
}


function SearchItem({searchItem}){
    const {owner} = searchItem;
    return (
        <div  className="card">
        <div className="card-body">
            <h2 title={searchItem.name}>{searchItem.name}</h2>
            <p>This repository has {searchItem.watchers_count} watchers.</p>
            <p><a target='_blank' rel='noopenner noreferrer' href={searchItem.html_url}>Visit repository</a></p>
            <h5>{owner.login}</h5>
        </div>
    </div>
    );
}