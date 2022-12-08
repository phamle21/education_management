import apiBase from 'app/axios/apiBase';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import ChartPie from 'views/interface/plugins/chart/ChartPie';

const ElearningDashboard = () => {
  const { formatMessage: f } = useIntl();

  const title = f({ id: 'menu.dashboard' });
  const description = 'Code Academy Dashboard Page';

  const breadcrumbs = [{ to: '', text: f({ id: 'menu.home' }) }];

  // const clickedForEdit = (event, row) => {
  //   event.preventDefault();
  //   toggleAllPageRowsSelected(false);
  //   row.toggleRowSelected();
  //   setIsOpenAddEditModal(true);
  // };

  const [dashboard, setDashboard] = useState();

  const [courseList, setCourseList] = useState();

  const [limit, setLimit] = useState(4);

  const label = [];

  const data = [];

  const loadMore = () => {
    setLimit(limit + 4);
  }

  useEffect(() => {
    apiBase.get('/dashboard')
      .then((res) => {
        console.log(res.data);
        setDashboard(res.data);
        setCourseList(res.data.courseList);
      }).catch((err) => console.log(err))
  }, [])

  const totalTuition = () => {
    let total = 0;

    if (courseList) {
      courseList.forEach(element => {
        total += element.totalTuition;
        label.push(element.name);
      });
    }

    return total;
  }

  const total = totalTuition();
  const getData = () => {
    if (courseList) {
      courseList.forEach(element => {
        data.push(Math.round((element.totalTuition / total) * 100));
      });
    }
  }

  getData();

  console.log(total);
  console.log(label);
  console.log(data);

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row>
        {/* Continue Learning Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">{f({ id: 'menu.course_progress' })}</h2>
          {
            dashboard && dashboard.courseList.slice(0, limit).map((item, i) => (
              <Card className="mb-5" key={i}>
                <Row className="g-0 sh-16">
                  <Col xs="auto">
                    <img src={item.image} alt="alternate text" className="card-img sw-10 sw-lg-12" />
                  </Col>
                  <Col>
                    <Card.Body className="py-0 h-100 d-flex align-items-center">
                      <div className="w-100">
                        <div className="d-flex flex-row justify-content-between mb-2">
                          <div>{item.name}</div>
                          <div className="text-muted">{item.totalStudySessionLearned}/{item.totalSchedules} bài</div>
                        </div>
                        <ProgressBar className="progress-md mb-2" now={item.totalStudySessionLearned} />
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))
          }

          {
            courseList && limit >= courseList.length ?
              null :
              <Row>
                <Col xs="12" className="text-center">
                  <Button variant="outline-primary" className="sw-30" onClick={() => loadMore()}>
                    {f({ id: 'menu.load_more' })}
                  </Button>
                </Col>
              </Row>
          }
        </Col>
        {/* Continue Learning End */}


        {/* Recommended Courses Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Thống kê tiền học phí thu được từ các khóa học</h2>
          <Card className="ps-5 pe-5 sh-20 sh-md-40 h-xl-100-card">
            <ChartPie labelsData={label} chartData={data} />
          </Card>
        </Col>
        {/* Recommended Courses End */}
      </Row>

      {/* Contacts Start */}
      {/* <h2 className="small-title">{f({ id: 'menu.contacts_need_advice' })}</h2> */}
      {/* <Card className={classNames('mb-2', { selected: row.isSelected })} onClick={(event) => clickedForEdit(event, row)}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col className="py-3 py-sm-3">
            <Card.Body className="ps-5 pe-4 pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <a
                  href="#detail"
                  onClick={(event) => clickedForEdit(event, row)}
                  className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3 d-flex order-1 view-click"
                >
                  <div className="name">name</div>
                  <div className="text-small text-muted text-truncate position">position</div>
                </a>
                <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                  <div className="lh-1 text-alternate email">email</div>
                </Col>
                <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                  <div className="lh-1 text-alternate phone">phone</div>
                </Col>
                <Col xs="1" lg="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last">
                  <Form.Check className="form-check mt-2" type="checkbox" checked={checked} onChange={onChange} />
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card> */}
      {/* Contacts End */}
    </>
  );
};

export default ElearningDashboard;
