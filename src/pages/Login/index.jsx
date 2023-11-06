import { Label, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsCheck2Circle } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { Modal } from "@components/organisms";

export const Login = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("https://fakestoreapi.com/users");
      setTempData(res.data);
    };
    fetchUser();
  }, []);
  useEffect(() => {
    if (isShowModal === true) {
      const timeout = setTimeout(() => {
        setIsShowModal(false);
        navigate("/home");
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
    if (isErrorModal === true) {
      const timeout = setTimeout(() => {
        setIsErrorModal(false);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isShowModal, isErrorModal, navigate]);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (
      form.username === "admin@bukapedia.com" &&
      form.password === "admin123"
    ) {
      navigate("/home/admin");
      localStorage.setItem("token", "credentials");
    } else {
      try {
        await axios
          .post("https://fakestoreapi.com/auth/login", form)
          .then((resp) => {
            tempData.forEach((dataUser) => {
              if (dataUser.username === form.username) {
                resp.status === 200 && setIsShowModal(!isShowModal);
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("userId", dataUser.id);
              }
            });
          });
      } catch (error) {
        console.error(error);
        setIsErrorModal(true);
      }
    }
  };
  //   username:'johnd',
  //   password:'m38rmF$',
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="w-full max-w-sm  rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
          <form className="space-y-6 " action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <Label
                for="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your username
              </Label>
              <TextInput
                type="text"
                name="username"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="name@company.com"
                value={form.username}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div>
              <Label
                for="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </Label>
              <TextInput
                type="password"
                name="password"
                value={form.password}
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex h-5 items-center"></div>
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleSubmit()}
          >
            Login to your account
          </button>
        </div>
      </div>
      <Modal
        modalHeader={false}
        iconClose={true}
        onClose={() => {
          setIsShowModal(!isShowModal);
        }}
        showModal={isShowModal}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 px-5">
          <BsCheck2Circle className="text-5xl text-emerald-600" />
          <h1 className="text-center text-xl text-slate-900">Berhasil</h1>
          <h1 className="text-center text-xl text-slate-900">Berhasil Login</h1>
        </div>
      </Modal>
      <Modal
        modalHeader={false}
        iconClose={true}
        onClose={() => {
          setIsErrorModal(!isErrorModal);
        }}
        showModal={isErrorModal}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 px-5">
          <BiErrorCircle className="text-5xl text-rose-600" />
          <h1 className="text-center text-xl text-slate-900">Gagal</h1>
          <h1 className="text-center text-xl text-slate-900">
            Username atau Password Salah
          </h1>
        </div>
      </Modal>
    </>
  );
};
