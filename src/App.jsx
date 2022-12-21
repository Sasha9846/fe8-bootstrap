import React, {useState} from "react";
// import Logo from "./assets/logo.svg";
import {Container, Row, Col, Navbar, Form, Button, Image} from "react-bootstrap";
import {Check2All} from "react-bootstrap-icons";
// Check2All - это название иконки из библиотеки реакт-буцрап-иконс
export default () => {
//     return <div className="container">
// ВСЕ ПОДСКАЗКИ, КОМОПНЕНТЫ И КЛАССЫ ЭТИ МОЖНО ПОСМОТРЕТЬ НА САЙТЕ
// <div className="row gy-2 gx-2"> 
// {/* g-2 -это отсуп  между элементами.т.е. gutters (gap), равный величине 2*/}
// {/* можно и так: gx-2 -это отсуп  между элементами по горизонтали, gy-2 по вертикале, равные величине 2 */}
// {/* px и py на примере ниже это паддинги и их величина */}
// {/* bg - это цвет, bg-dark - темный цвет, text-цвет текста */}
// <div className="col col-12 py-3 px-5 bg-dark text-light">1</div> 
// {/* col-12 обознаяает, что этот тег займет 12 колонок из 12 */}
// {/* md-это для планшетов  в примере ниже 3 столбца займут*/}
// {/* sm-это для мобилок  в примере ниже 6 столбцов займут*/}
// {/* xs-это для мобилок мелкого разрешения в примере ниже 12 столбцов займут, его можно просто записать как col-12*/}
// {/* так же можно подключить флексы */}
// <div className="col col-6">2</div>
// <div className="col col-6">3</div>
// <div className="col col-12">4</div>
// <div className="col col-12 col-sm-6 col-md-3 bg-warning">5</div>
// <div className="col col-12 col-sm-6 col-md-3 bg-warning">6</div>
// <div className="col col-12 col-sm-6 col-md-3 bg-warning">7</div>
// <div className="col col-12 col-sm-6 col-md-3 bg-warning">8</div>
// <div className="col col-1">9</div>
// <div className="col col-11">10</div>
// <div className="col col-1">11</div>
// <div className="col col-4">12</div>
// <div className="col col-4">13</div>
// <div className="col col-2">14</div>
// <div className="col col-1">15</div>
// <div className="col col-12">16</div>

// </div>
//     </div>

const [img, setImg] = useState("");
return <Container className="bg-body">

    <Row className="g-3 align-content-between min-vh-100">
        {/* чз as мы изменили тег див на тег хедер */}
     <Col as="header" xs={12}>
        <Navbar className="bg-dark text-light p-3">
            <Navbar.Brand href="" className="text-light">Site</Navbar.Brand>
        </Navbar>
     </Col>
     <Col xs={12} md={6}>
        <Form className="d-flex flex-column" style={{gap: "1rem"}}>
         <Form.Group>
            <Form.Label for="name">Название товара</Form.Label>
            <Form.Control id="name" placeholder="Рулька говяжья"></Form.Control>
         </Form.Group>
         <Form.Group>
            <Form.Label for="image">Изображение товара</Form.Label>
            <Form.Control id="image" placeholder="https://cdn.fishki.net/upload/post/2016/07/13/2011420/1a402cda7bcb305b87e7544422a26018.jpg"
            value={img} onChange={e => setImg(e.target.value)}></Form.Control>
         </Form.Group>
         <Form.Group>
            <Form.Label for="price">Цена</Form.Label>
            <Form.Control id="price" type="number" min="0" step="10" placeholder="0"></Form.Control>
         </Form.Group>
         <Form.Group>
            <Form.Label for="discount">Скидка</Form.Label>
            <Form.Select id="discount">
                <option value="0">Нет скидки</option>
                <option value="10">Скидка 10%</option>
                <option value="15">Скидка 15%</option>
                <option value="20">Скидка 20%</option>
                <option value="25">Скидка 25%</option>
            </Form.Select>
         </Form.Group>
         <Form.Group>
            <Form.Label for="description">Описание</Form.Label>
            <Form.Control as="textarea" rows={4} id="description" placeholder="Прекрасное лакомство для собак"></Form.Control>
         </Form.Group>
         <Button className="btn-dark w-25 align-self-end">
            <Check2All/>
         </Button>
        </Form>
     
     </Col>

     <Col xs={12} md={6}>
        <Image src={img} className="w-100"/>
    </Col>
     <Col xs={12} as="footer" className="bg-dark text-info" p-3>&copy;{new Date().getFullYear()}</Col>

    </Row>
</Container>
}
