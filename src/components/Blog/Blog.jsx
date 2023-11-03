import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
    console.log(blog);

    return (
        <div>
            <h1>blog</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;