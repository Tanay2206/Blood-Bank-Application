import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore
            odio, enim ea debitis, dolores aliquid minus distinctio, veritatis
            neque laborum similique. Architecto at accusamus incidunt nisi
            eveniet repudiandae modi cumque sint necessitatibus deleniti eaque,
            mollitia alias fugiat voluptatum a ea repellat debitis, saepe sequi.
            Necessitatibus eos ipsum quia consequuntur neque sunt, in a
            doloremque veritatis cum culpa saepe sint nobis repudiandae iure
            harum? Dicta sit impedit, similique tenetur nulla rerum alias, optio
            nihil amet molestiae corporis. Similique itaque saepe adipisci,
            optio nobis tempore eaque dolor at voluptatibus iure molestias
            aperiam blanditiis nostrum temporibus eveniet reprehenderit? Quia
            aspernatur eveniet omnis ipsum eligendi vero beatae ex debitis
            aliquam alias reiciendis doloremque recusandae rem minus, saepe ab
            eos totam obcaecati, dolorum nemo voluptates? Incidunt ut dolore
            repellat nostrum facere quae animi ducimus. Nam cupiditate id
            delectus. Eaque officiis eius suscipit, assumenda culpa aspernatur
            officia earum enim ad, delectus explicabo facere ratione impedit
            dolor, cum quae odit atque sapiente? Adipisci earum odit at
            doloremque facere fuga laboriosam quibusdam, praesentium veniam? Est
            tempore sequi excepturi iusto tempora incidunt debitis aspernatur
            velit in expedita provident, omnis deleniti officiis delectus
            consequuntur ex ad dolorum placeat. Obcaecati beatae maxime quasi
            eaque dignissimos recusandae nobis deleniti ex dicta!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
