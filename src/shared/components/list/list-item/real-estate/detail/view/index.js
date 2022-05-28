import './view.css';
import house from '../../../../../images/house.png';

const View = ({item}) => {
    return (
        <div className='view__detail'>
            <div>
                <img className='detail__image' src={house} alt='house' />
            </div>
            <div className='detail__info'>
                <div className='detail__category'>
                    <span>ID: </span>
                    <span>{item.id}</span>
                </div>
                <div className='detail__category'>
                    <span>{item.title}</span>
                </div>
                <div className='detail__category'>
                    <span>Địa chỉ: </span>
                    <span>{item.address}</span>
                </div>
                <div className='detail__category'>
                    <span>Diện tích: </span>
                    <span>{item.area}</span>
                </div>
                <div className='detail__category'>
                    <span>Hướng nhà: </span>
                    <span>{item.direction}</span>
                </div>
                <div className='detail__category'>
                    <span>Số tầng: </span>
                    <span>{item.floors}</span>
                </div>
                <div className='detail__category'>
                    <span>Thông tin chủ nhà: </span>
                    <span>{item.owner}</span>
                </div>
                <div className='detail__category'>
                    <span>Liên hệ: </span>
                    <span>{item.phone}</span>
                </div>

                <div className='detail__info__control'>
                    <button><i class="fa fa-trash delete-btn" />Xóa</button>
                    <input type='submit' value='Chỉnh sửa'/>
                </div>
            </div>
        </div>
    );
}

export default View;