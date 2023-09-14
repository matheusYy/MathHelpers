export const Calculadora = (props) => {
 const { styles, fill } = props;

 return (
  <div className={styles}>
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="m24,12c0,.553-.448,1-1,1h-10v10c0,.553-.448,1-1,1s-1-.447-1-1v-10H1c-.552,0-1-.447-1-1s.448-1,1-1h10V1c0-.553.448-1,1-1s1,.447,1,1v10h10c.552,0,1,.447,1,1Zm-1,4h-6c-.552,0-1,.447-1,1s.448,1,1,1h6c.552,0,1-.447,1-1s-.448-1-1-1Zm0,4h-6c-.552,0-1,.447-1,1s.448,1,1,1h6c.552,0,1-.447,1-1s-.448-1-1-1ZM1,6h6c.552,0,1-.447,1-1s-.448-1-1-1H1c-.552,0-1,.447-1,1s.448,1,1,1Zm16,0h2v2c0,.553.448,1,1,1s1-.447,1-1v-2h2c.552,0,1-.447,1-1s-.448-1-1-1h-2v-2c0-.553-.448-1-1-1s-1,.447-1,1v2h-2c-.552,0-1,.447-1,1s.448,1,1,1Zm-9.293,10.293c-.391-.391-1.023-.391-1.414,0l-1.793,1.793-1.793-1.793c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l1.793,1.793-1.793,1.793c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793,1.793,1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-1.793-1.793,1.793-1.793c.391-.391.391-1.023,0-1.414Z"/></svg>
  </div>
 )
}

