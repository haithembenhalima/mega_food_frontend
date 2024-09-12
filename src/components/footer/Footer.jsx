import "./Footer.css";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import {Button } from "primereact/button";
function Footer() {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h2>
            مــيـ<span style={{ color: "#ffc107" }}>ڤافــــــــ</span>ــــوود
          </h2>

          <p>نسعى لنفرض نفسنا من خلال تعاملنا وجودتنا، للتواصل معنا:</p>

          <div className="social">
            <a href=""><i className="pi pi-facebook"></i></a>
            <a href=""><i className="pi pi-instagram"></i></a>
            <a href=""><i className="pi pi-twitter"></i></a>
            <a href=""><i className="pi pi-whatsapp"></i></a>
          </div>
        </div>

        <div className="column links">
        <h3>خدماتنا</h3>
          <ul>
            <li>
              <a href="#faq">الأقسام</a>
            </li>
            <li>
              <a href="#cookies-policy">المنتجات</a>
            </li>
            <li>
              <a href="#terms-of-services">العروض</a>
            </li>
            <li>
              <a href="#support">التخفيضات</a>
            </li>
          </ul>
        </div>

        <div className="column links">
          <h3>فريقنا</h3>
          <ul>
            <li>
              <a href="#faq">حول ميقافود</a>
            </li>
            <li>
              <a href="#cookies-policy">من نحن؟</a>
            </li>
            <li>
              <a href="#terms-of-services">تواصل معنا</a>
            </li>
            <li>
              <a href="#support">الإتصال بالدعم</a>
            </li>
          </ul>
        </div>

        <div className="column subscribe">
          <h3>سجّل للفوز بتخفيضات</h3>
          <div>
          <IconField iconPosition="right">
              <InputIcon className="pi pi-email"> </InputIcon>
              <InputText v-model="email" placeholder="ضع حساب الإيميل الخاص بك" />
            </IconField>
            <Button label="تسجيل"/>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>كل الحقوق محفوظة &copy; فريق ميقافود 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
