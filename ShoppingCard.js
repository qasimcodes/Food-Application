import React from 'react'
import '../style/ShoppingCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../Redux/cartSlice'

const ShoppingCard = () => {
    const dispatch = useDispatch();
    const Delete =(id)=>{
          dispatch(remove(id))
    }

    const getdata = useSelector((state)=>state.cartReducer)

  return (
   <div className="container bootdey mt-5">
  <div className="row bootstrap snippets ">
    
    <div className="clearfix visible-sm" />
    {/* Cart */}
    <div className="col-lg-9 col-md-9 col-sm-12 m-auto">
      <div className="col-lg-12 col-sm-12 bg-dark text-white p-2 mt-5">
        <span className="title ">SHOPPING CART</span>
      </div>
      <div className="col-lg-12 col-sm-12 hero-feature">
        <div className="table-responsive">
          <table className="table table-bordered tbl-cart">
            <thead>
              <tr>
                <td className="hidden-xs">Image</td>
                <td>Product Name</td>
                <td>Size</td>
                <td>Color</td>
                <td className="td-qty">Quantity</td>
                <td>Unit Price</td>
                <td>Sub Total</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
             {getdata.map((x)=>{
                return(
                    <tr>
                    <td className="hidden-xs">
                      <a href="#">
                        <img src={x.image}alt="Age Of Wisdom Tan Graphic Tee" title width={47} height={47} />
                      </a>
                    </td>
                    <td><a href="#" className='img1'>{x.title}</a>
                    </td>
                    <td>
                      <select name>
                        <option value selected="selected">S</option>
                        <option value>M</option>
                      </select>
                    </td>
                    <td>-</td>
                    <td>
                      <div className="input-group bootstrap-touchspin"><span className="input-group-btn"><button className="btn btn-default bootstrap-touchspin-down" type="button">-</button></span><span className="input-group-addon bootstrap-touchspin-prefix" style={{display: 'none'}} /><input type="text" name defaultValue={1} className="input-qty form-control text-center" style={{display: 'block'}} /><span className="input-group-addon bootstrap-touchspin-postfix" style={{display: 'none'}} /><span className="input-group-btn"><button className="btn btn-default bootstrap-touchspin-up" type="button">+</button></span></div>
                    </td>
                    <td className="price">$ {x.price}</td>
                    <td>$ {x.price}</td>
                    <td className="text-center">
                      <a onClick={()=>Delete(x.id)} href="#" className="remove_cart" rel={2}>
                        <i className="fa fa-trash-o" />
                      </a>
                    </td>
                  </tr>
                )
             })}
           
              <tr>
                <td colSpan={6} align="right">Total</td>
                <td className="total" colSpan={2}><b>$ 163.47</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-group btns-cart">
          <Link to='/product'><button type="button" className="btn btn-primary"><i className="fa fa-arrow-circle-left" /> Continue Shopping</button></Link>
          <button type="button" className="btn btn-primary">Update Cart</button>
          <button type="button" className="btn btn-primary">Checkout <i className="fa fa-arrow-circle-right" /></button>
        </div>
      </div>
    </div>
    {/* End Cart */}
  </div>
</div>

  )
}

export default ShoppingCard