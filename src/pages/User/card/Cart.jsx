import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import NotFound from "../../../components/notfound/NotFound";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { SelectButton } from 'primereact/selectbutton';
import { Tag } from "primereact/tag";
import { fetchCart, deleteFromCart } from "../../../redux/cart/actions";
import { applyCoupon } from "../../../redux/coupon/actions";
import { onlinePayment } from "../../../redux/payment/actions";
import { Toast } from "primereact/toast";


function Cart() {
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const toast = React.useRef(null);
  const [visible, setVisible] = useState(false);
  const options = ['دفع إلكتروني', 'دفع عند الإستلام'];
  const [value, setValue] = useState(options[0]);

  

  const { cartData, cartLoading, cartError } = useSelector(
    (state) => state.cart
  );

  const { paymentData, paymentLoading, paymentError } = useSelector(
    (state) => state.payment
  );

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const deletingFromCart = async (id) => {

    const result = await dispatch(deleteFromCart(id));

    console.log(result);

    if (!deleteFromCart.fulfilled.match(result)) {
      toast.current.show({
        severity: "error",
        summary: "حدث خطأ، يرجى إعادة المحاولة",
        life: 6000,
      });
    } else if (deleteFromCart.fulfilled.match(result)) {
      toast.current.show({
        severity: "success",
        summary: "تمت إزالة المنتج من السلة",
        life: 6000,
      });
    }

    window.location.reload();
  };

  const applyingCoupon = async () => {
    const couponData= {
      coupon: coupon,
      UserId: localStorage.getItem('userId'),
    }
    const result = await dispatch(applyCoupon(couponData));

    console.log(result);

    if (!applyCoupon.fulfilled.match(result)) {
      toast.current.show({
        severity: "error",
        summary: "كود الخصم غير صحيح، أو منتهي الصلاحية",
        life: 6000,
      });
    } else if (applyCoupon.fulfilled.match(result)) {
      toast.current.show({
        severity: "success",
        summary: "تم تطبيق كود الخصم بنجاح",
        life: 6000,
      });
    }

  };

  const handleOnlinePayment = async () => {
    const cartId = cartData.Cart.id; // Make sure this is defined
    console.log('Cart ID:', cartId); // Log the cartId to check if it's defined
  
    if (!cartId) {
      // If cartId is undefined, handle the error
      toast.current.show({
        severity: "error",
        summary: "Cart ID is not defined.",
        life: 6000,
      });
      return;
    }
  
    const result = await dispatch(onlinePayment(cartId));
  
    console.log('Dispatch result:', result);
  
    if (onlinePayment.fulfilled.match(result)) {
      const paymentUrl = result.payload.url; // Extract the URL from the payload
      window.location.href = paymentUrl; // Redirect to payment URL
    } else {
      toast.current.show({
        severity: "error",
        summary: "حدث خطأ يرجى إعادة المحاولة لاحقا",
        life: 6000,
      });
    }
  };
  
  


  //if (cartLoading) return <p>Loading...</p>;
  if (cartError) {
    localStorage.clear();
    window.location.href = "/";
  }
  if (!cartData || !cartData.Cart) {
    return <p>لا يوجد منتجات لديك في السلة</p>;
  }
  console.log(cartData);

  return localStorage.getItem("role") === "user" ? (
    <div className="container">
      {/* Start Navbar here */}
      <Navbar/>
      {/* End Navbar here */}

      <div className="cart-container">
        <h2>سلّة المشتريات</h2>
        <div className="cart-items">
          {cartData || cartData.Cart? cartData.CartItem.map((item) => {

            return (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.Product.name}</h3>

                  <p>السعر: {item.Product.price} د.ج</p>
                  <p>الكمية: {item.quantity}</p>
                </div>
                <div className="item-total">
                  <Button
                    icon="pi pi-trash"
                    rounded
                    text
                    raised
                    severity="danger"
                    aria-label="Cancel"
                    onClick={()=> deletingFromCart(item.id)}
                  />
                </div>
              </div>
            );
          }): <h2>لا يوجد منتجات لديك في السلة</h2>}
          
        </div>
        <div className="coupon-section">
          <InputText
            className="coupon-input"
            v-model="value1"
            placeholder="أدخل كوبونك"
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button label="تفعيل الكوبون" onClick={()=>applyingCoupon()}/>
        </div>
        <div className="cart-summary">
          <h3>المبلغ الإجمالي:</h3>
          <Tag severity="success" className="tag">
            {cartData.Cart.totalCartPrice} د.ج
          </Tag>

          <Button
            className="checkout-button"
            label="تأكيد الطلب"
            size="large"
            onClick={()=>setVisible(true)}
          />
        </div>
      </div>

      
      <Dialog
        header="اختر طريقة الدفع"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="card flex justify-content-center">
        <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />

          <br />
          <br />
          <Button style={{background:"green", color:"white" , width:"100%"}} label="تأكيد الطلب" onClick={()=> handleOnlinePayment()}/>
        </div>
      </Dialog>

      <Footer />
      <Toast ref={toast} />
      {/* End Footer here */}
    </div>
  ) : (
    <div className="container">
      <NotFound />
    </div>
  );
}

export default Cart;
