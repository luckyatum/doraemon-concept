import { REALITY_SECOND_PROPORTION } from '../Util/constant';

export default class Time {
    constructor({ passingSpeed = 1, direction = 'future', current = Date.now() }) {
        this.passingSpeed = passingSpeed; // 流逝速度，1.0表示 1秒
        this.direction = direction; // 流逝方向，forward-往旧，future-往前
        this.current = current; // 当前时间，会随流逝速度改变

        setInterval(() => {
            this.setCurrent(current + 1000);
        }, REALITY_SECOND_PROPORTION * 1000)
    }

    // 获取流逝速度
    getPassingSpeed() {
        return this.passingSpeed;
    }

    // 获取流逝方向
    getDirection() {
        return this.direction;
    }

    // 获取当前时间
    getCurrent() {
        return this.current;
    }

    // 调转流逝方向
    turnDirection(direction) {
        this.direction = direction;
    }

    // 修改流逝速度
    modifyPassingSpeed(speed) {
        this.passingSpeed = speed;
    }

    // 设置当前时间
    setCurrent(current) {
        this.current = current;
    }
}