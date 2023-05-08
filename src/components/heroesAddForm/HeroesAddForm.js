import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { heroAdded, fichange, sichange, tichange } from '../../actions';
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const {fI, sI, tI, filters} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const createChar = () => {
        const charObj = {
            id: uuidv4(),
            name: fI,
            description: sI,
            element: tI
        }
        request("http://localhost:3001/heroes", "POST", JSON.stringify(charObj))
        return charObj;
    }
    const elems = filters.map(item => 
        {return <option key={item.id} value={item.name === 'all' ? '' : item.name}>{item.text}</option>})

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={(e) => {
            e.preventDefault();
            dispatch(heroAdded(createChar()))
            dispatch(fichange(''))
            dispatch(sichange(''))
            dispatch(tichange(''))
        }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    onChange={e => dispatch(fichange(e.target.value))}
                    value={fI}
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={e => dispatch(sichange(e.target.value))}
                    value={sI}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    onChange={e => dispatch(tichange(e.target.value))}
                    value={tI}
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    {elems}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;