import GlobalButton from "../components/GlobalButton";
import PageTitle from "../components/PageTitle";

export default function ErrorPage() {
  return (
    <>
      <PageTitle
        margin={"50px 0"}
        topTitle="404"
        title="Page not found"
        titlePartOne="Sorry, the page you are looking for does not exist."
      />
      <GlobalButton onClick={() => window.history.back()}>Go Back</GlobalButton>
    </>
  );
}
