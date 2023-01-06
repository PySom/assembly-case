import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../api/remote/api';
import AppButton from '../../components/app_button/app_button';
import FormContainer from '../../components/form_container/form_container';
import FormInput, { FormRadio } from '../../components/form_input/form_input';
import SearchList from '../../components/search_list/search_list';
import { useInput } from '../../custom_hooks/use_input';
import './home.css';

const SEARCH_TYPE = {USER: 'user', ORG: 'org'}
export default function Home() {
    const [isBusy, setIsBusy] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const history = useHistory();

    const {term} = useParams();

    const [searchType, setSearchType] = useState(SEARCH_TYPE.USER);

    const onOptionChange = ({target: {value}}) => {
       setSearchType(value);
    }

    const {onSetValue, ...searchProps} = useInput('text', '');

    useEffect(() => {
        if(term && !searchProps.value){
            onSetValue(term);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term])

    const onClick = async () => {
        history.replace(`/search/${searchProps.value}`);
        try{
            setIsBusy(true);
            setData(null);
            const result = await api.get(`?q=${searchType}:${searchProps.value}&sort=stars&order=desc`)
            setData(result)
            setIsBusy(false);
        }catch(err){
            setIsBusy(false);
            setError(err.message);
        }
        
    }

    return (
        <FormContainer>
            <div className='d-flex'>
                <FormInput className='flex-one' inputProps={searchProps}/>
            </div>
            <div className='form-area d-flex space-between align-center mt-20'>
                <fieldset className='gap-30 no-border d-flex align-center no-margin no-padding' name='Choose search type'>
                    <FormRadio name='search_type' checked={searchType === SEARCH_TYPE.USER} value={SEARCH_TYPE.USER} label='User' onChange={onOptionChange}  />
                    <FormRadio name='search_type' checked={searchType === SEARCH_TYPE.ORG} value={SEARCH_TYPE.ORG} label='Organization' onChange={onOptionChange}  />
                </fieldset>
                <AppButton onClick={onClick} />
            </div>
            {isBusy 
                ? <FontAwesomeIcon icon={faSpinner} spin={true} />
                : data 
                    ? 
                        data.total_count > 0
                            ? <SearchList searchItems={data?.items} total={data.total_count} /> 
                            : <p>No result for this search</p>
                    : <p className='mt-20'>{error}</p>
            
            }
            
            
            
        </FormContainer>
    );
}