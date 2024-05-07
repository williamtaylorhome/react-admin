/**
 * http general tool function
 */
import axios from 'axios';
import { message } from 'antd';

interface IFRequestParam {
    url: string;
    msg?: string;
    config?: any;
    data?: any;
}
/**
 * public get request
 * @param url interface address
 * @param msg Interface exception prompt
 * @param headers header configuration required by the interface
 */
export const get = ({ url, msg = 'Interface exception', config }: IFRequestParam) =>
    axios
        .get(url, config)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            message.warn(msg);
        });

/**
 * public post request
 * @param url interface address
 * @param data interface parameters
 * @param msg Interface exception prompt
 * @param headers header configuration required by the interface
 */
export const post = ({ url, data, msg = 'Interface exception', config }: IFRequestParam) =>
    axios
        .post(url, data, config)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            message.warn(msg);
        });
