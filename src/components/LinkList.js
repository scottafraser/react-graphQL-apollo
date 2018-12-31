import React, { Component } from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const style = {
  // display: "flex",
  // justifyContent: "center",
  // maxWidth: "200px",
  // flexDirection: "column"
};

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.feed.links;

          return (
            <div style={style}>
              {linksToRender.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default LinkList;
