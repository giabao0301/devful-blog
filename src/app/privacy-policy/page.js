const PrivacyPolicy = () => {
  return (
    <div className="my-12 mx-10 h-screen">
      <h2 className="text-5xl text-center font-bold">
        Chính sách quyền riêng tư
      </h2>
      <div className="mt-12 flex flex-col gap-4">
        <p className="text-2xl">
          Chúng tôi rất coi trọng việc bảo vệ thông tin cá nhân của bạn. Chính
          sách quyền riêng tư này mô tả cách chúng tôi thu thập, sử dụng và bảo
          vệ thông tin cá nhân của bạn khi bạn sử dụng trang web của chúng tôi.
        </p>
        <h3 className="text-3xl font-bold">Thu thập thông tin cá nhân</h3>
        <p className="text-2xl">
          Chúng tôi thu thập thông tin cá nhân từ bạn khi bạn đăng ký nhận bản
          tin trên trang web của chúng tôi. Thông tin này chỉ bao gồm địa chỉ
          email.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
