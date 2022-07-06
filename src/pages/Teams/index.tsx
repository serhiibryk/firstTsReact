import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Pagination } from "antd";

import { userService } from "../../services/user";

import useStyles from "./style";

const { Meta } = Card;

interface User {
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

interface PageData {
  size: number;
  page: number;
  pagesTotal: number;
}

const Teams = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const classes = useStyles();
  const [pageData, setPageData] = useState<PageData>({
    size: 10,
    page: 1,
    pagesTotal: 0,
  });

  const fetchUsers = async (size: number, page: number) => {
    userService.getUser(size, page).then((res) => {
      console.log(res);
      setUserList(res.data.results);
      setPageData({
        size: res.data.info.results,
        page: res.data.info.page,
        pagesTotal: 100, // imagine that it`s value from BE
      });
    });
  };

  useEffect(() => {
    fetchUsers(pageData.size, pageData.page);
  }, []);

  const handleChange = (page: number, size: number) => {
    fetchUsers(size, page);
  };

  return (
    <div>
      <h1>Teams</h1>
      <div className={classes.root}>
        {userList.map((user) => {
          return (
            <Card
              className={classes.card}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={user.picture.medium} />}
            >
              <Meta
                title={user.name.first + " " + user.name.last}
                description={user.email}
              />
            </Card>
          );
        })}
      </div>
      {!!userList.length && (
        <div className={classes.pagination}>
          <Pagination
            size="small"
            total={pageData.pagesTotal * pageData.size}
            showSizeChanger
            pageSize={pageData.size}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default Teams;
