const hollandJobs: Record<string, { title: string; reason: string }[]> = {
  R: [
    {
      title: 'Kỹ sư cơ khí',
      reason: 'Công việc đòi hỏi kỹ năng thao tác thực tế, tư duy kỹ thuật và khả năng xử lý công cụ – hoàn toàn phù hợp với người thích làm việc với máy móc như nhóm R.'
    },
    {
      title: 'Thợ điện',
      reason: 'Nhóm R yêu thích sửa chữa, lắp đặt, vận hành – đây là công việc mang lại cảm giác kiểm soát được thế giới vật chất và có tác động rõ rệt đến môi trường xung quanh.'
    },
    {
      title: 'Lập trình nhúng',
      reason: 'Sự kết hợp giữa phần cứng và phần mềm, nơi người làm phải hiểu nguyên lý vận hành của thiết bị – điều này rất phù hợp với tư duy kỹ thuật và thực tế của nhóm R.'
    },
    {
      title: 'Kỹ thuật viên xây dựng',
      reason: 'Một môi trường ngoài trời, đòi hỏi phối hợp cơ bắp, kỹ năng đo đạc, thi công – đây là nơi nhóm R phát huy được sự kiên trì, bền bỉ và yêu lao động.'
    }
  ],
  I: [
    {
      title: 'Nhà nghiên cứu',
      reason: 'Với khát khao tìm tòi tri thức, người nhóm I như được sống trong thế giới riêng khi được tiếp cận dữ liệu, thử nghiệm giả thuyết và khám phá kiến thức mới.'
    },
    {
      title: 'Nhà khoa học dữ liệu',
      reason: 'Họ yêu thích mô hình, thuật toán, biểu đồ – nơi họ không cần phải nói nhiều, mà để dữ liệu kể câu chuyện và chính xác hóa mọi vấn đề.'
    },
    {
      title: 'Bác sĩ',
      reason: 'Công việc này kết hợp giữa phân tích, đánh giá y khoa và đưa ra quyết định dựa trên chẩn đoán – phù hợp với người có óc quan sát và khả năng xử lý thông tin khoa học.'
    },
    {
      title: 'Kỹ sư phần mềm',
      reason: 'Không gian làm việc yên tĩnh, logic mạch lạc và khả năng giải quyết vấn đề theo cách riêng khiến nhóm I cảm thấy tự do và phát huy trí tuệ.'
    }
  ],
  A: [
    {
      title: 'Họa sĩ',
      reason: 'Họ có thể vẽ nên thế giới riêng của mình bằng màu sắc, đường nét và cảm xúc. Người nhóm A sống bằng trực giác và hình ảnh – hội họa chính là nơi họ tự do nhất.'
    },
    {
      title: 'Nhạc sĩ',
      reason: 'Âm nhạc là ngôn ngữ của tâm hồn – và nhóm A có trái tim luôn rung động trước giai điệu. Họ viết nhạc để kể câu chuyện mà lời nói không thể diễn đạt.'
    },
    {
      title: 'Thiết kế đồ họa',
      reason: 'Sự kết hợp giữa nghệ thuật và công nghệ giúp nhóm A thể hiện sáng tạo cá nhân, đồng thời tạo ra sản phẩm có tính ứng dụng trong đời sống.'
    },
    {
      title: 'Biên kịch',
      reason: 'Họ thích kể chuyện, dựng nên thế giới nhân vật sống động, khai thác chiều sâu cảm xúc – và công việc viết kịch bản giúp họ truyền tải tâm tư đến công chúng.'
    }
  ],
  S: [
    {
      title: 'Giáo viên',
      reason: 'Với tấm lòng nhân hậu và khả năng truyền cảm hứng, người nhóm S thích chia sẻ kiến thức, kết nối với học sinh và xây dựng môi trường học tập tích cực.'
    },
    {
      title: 'Bác sĩ tâm lý',
      reason: 'Sự nhạy cảm và khả năng lắng nghe của nhóm S khiến họ trở thành người đồng hành lý tưởng trong hành trình chữa lành tinh thần.'
    },
    {
      title: 'Chuyên viên xã hội',
      reason: 'Công việc giúp đỡ người yếu thế, trẻ em, người già – chính là nơi nhóm S phát huy trọn vẹn giá trị sống đầy yêu thương và sẻ chia.'
    },
    {
      title: 'Điều dưỡng',
      reason: 'Đây là nghề đòi hỏi sự chăm sóc, kiên nhẫn, tận tâm – những phẩm chất tự nhiên mà người nhóm S sở hữu.'
    }
  ],
  E: [
    {
      title: 'Quản lý kinh doanh',
      reason: 'Người nhóm E yêu thích chiến lược, lãnh đạo, thúc đẩy đội nhóm và đạt mục tiêu – đây là công việc giúp họ phát huy tầm nhìn và sự quyết đoán.'
    },
    {
      title: 'Nhân viên sales',
      reason: 'Khả năng giao tiếp và thuyết phục giúp họ xây dựng mối quan hệ, đưa ra giải pháp và đạt được doanh số bằng chính cá tính năng động.'
    },
    {
      title: 'CEO',
      reason: 'Họ là người dẫn đầu, người tạo cảm hứng và định hình văn hóa doanh nghiệp – vị trí này phù hợp với khát vọng và năng lực lãnh đạo của nhóm E.'
    },
    {
      title: 'Chuyên viên marketing',
      reason: 'Sáng tạo, năng động, bắt kịp xu hướng – marketing là mảnh đất màu mỡ cho nhóm E thể hiện tư duy chiến lược và khả năng ảnh hưởng xã hội.'
    }
  ],
  C: [
    {
      title: 'Nhân viên kế toán',
      reason: 'Tính chính xác, sự tỉ mỉ và khả năng tổ chức của nhóm C rất phù hợp với công việc xử lý con số và lập báo cáo tài chính.'
    },
    {
      title: 'Chuyên viên tài chính',
      reason: 'Họ yêu sự ổn định và logic – môi trường tài chính mang lại cấu trúc rõ ràng để họ yên tâm phát triển lâu dài.'
    },
    {
      title: 'Thư ký',
      reason: 'Công việc này yêu cầu sự chu đáo, quản lý thời gian tốt, tổ chức giấy tờ – kỹ năng vốn có của nhóm C.'
    },
    {
      title: 'Quản lý hành chính',
      reason: 'Họ giúp bộ máy tổ chức vận hành trơn tru, đảm bảo quy trình được tuân thủ – và nhóm C yêu thích điều đó.'
    }
  ]
};

export default hollandJobs;
