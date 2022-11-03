import '../App.css';

const DisplayedItems = ({
  flag,
  getIdInfo,
  name,
  price,
  image,
  id,
  dispatch,
}) => {
  return (
    <div>
      <div className="coffee-item">
        <div>
          <img className="coffee-img" src={image} alt="coffee" />
          {/* <button> order </button> */}
        </div>

        <div>
          <p className="coffee-name"> {`${name}`}</p>
          <p> {`PHP ${price}`}</p>
          <p
            className="coffee-list-button coffee-list-buy"
            onClick={() => dispatch({ type: 'ADD_CART', payload: { id: id } })}
          >
            {' '}
            <i class="fa-solid fa-cart-shopping"></i>{' '}
          </p>
          {!flag && (
            <p
              className="coffee-list-button coffee-list-edit"
              onClick={() => getIdInfo(id)}
            >
              {' '}
              <i class="fa-solid fa-pen-to-square"></i>{' '}
            </p>
          )}
          <p
            className="coffee-list-button coffee-list-delete"
            onClick={() => {
              dispatch({ type: 'DELETE', payload: { id: id } });
              dispatch({ type: 'DELETE_CART', payload: { id: id } });
            }}
          >
            <i class="fa-solid fa-trash"></i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default DisplayedItems;
