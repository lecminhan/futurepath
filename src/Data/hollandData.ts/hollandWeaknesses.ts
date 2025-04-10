const hollandWeaknesses: Record<string, { title: string; description: string }[]> = {
  R: [
    {
      title: 'Giao tiếp hạn chế',
      description: 'Người thuộc nhóm Realistic thường giỏi trong việc làm hơn là nói. Họ là những người hành động nhiều hơn thể hiện, nên việc bộc lộ suy nghĩ và cảm xúc bằng lời thường không phải sở trường. Trong một cuộc trò chuyện sâu sắc, họ có thể lặng im, không phải vì không quan tâm, mà vì họ không biết bắt đầu từ đâu để nói ra điều mình nghĩ.'
    },
    {
      title: 'Ít linh hoạt',
      description: 'Sự ổn định và thực tế giúp họ kiên định, nhưng đôi khi lại khiến họ khó tiếp nhận điều mới. Khi đối mặt với thay đổi, họ có xu hướng bám vào những gì quen thuộc, khiến quá trình thích nghi trở nên chậm chạp và nặng nề hơn so với người khác.'
    },
    {
      title: 'Không thích lý thuyết',
      description: 'Họ yêu hành động, nhưng lại mất kiên nhẫn với những kiến thức trừu tượng, khái niệm lý thuyết hoặc những cuộc tranh luận mang tính học thuật. Họ cần thấy tác dụng thực tế rõ ràng thì mới có động lực để học hỏi.'
    },
    {
      title: 'Khó thể hiện cảm xúc',
      description: 'Người nhóm R thường giữ cảm xúc bên trong. Họ không dễ nói ra mình đang buồn, lo lắng hay tổn thương, khiến người thân đôi khi cảm thấy họ quá lạnh lùng hoặc xa cách, dù bên trong họ rất sâu sắc.'
    },
    {
      title: 'Không thích công việc văn phòng',
      description: 'Sự gò bó của văn phòng bốn bức tường, những cuộc họp dài lê thê, và bàn giấy đầy giấy tờ khiến họ cảm thấy mất năng lượng. Họ cần không gian mở, tự do và thực tiễn để phát huy tối đa khả năng.'
    }
  ],
  I: [
    {
      title: 'Thiếu thực tiễn',
      description: 'Người nhóm Investigative là những nhà tư tưởng bẩm sinh, say mê với dữ liệu và phân tích. Tuy nhiên, họ có thể đi quá sâu vào thế giới lý thuyết mà quên rằng cuộc sống cần hành động cụ thể và giải pháp đơn giản hơn là những mô hình phức tạp.'
    },
    {
      title: 'Ngại giao tiếp xã hội',
      description: 'Họ cảm thấy không thoải mái khi phải tham gia những cuộc trò chuyện xã giao, đông người. Tiếng ồn, sự náo nhiệt và các quy tắc giao tiếp xã hội có thể khiến họ cảm thấy mệt mỏi và muốn rút lui.'
    },
    {
      title: 'Thích làm việc một mình',
      description: 'Sự tập trung cao độ và thế giới nội tâm phong phú khiến họ thích làm việc độc lập. Nhưng trong môi trường cần hợp tác, họ có thể trở nên cô lập và khó hòa nhập nếu không chủ động kết nối.'
    },
    {
      title: 'Quá cầu toàn',
      description: 'Họ theo đuổi sự hoàn hảo đến từng chi tiết, đôi khi hy sinh cả tiến độ công việc chỉ vì một lỗi nhỏ. Điều này không chỉ gây áp lực cho bản thân họ mà còn ảnh hưởng đến nhóm làm việc.'
    },
    {
      title: 'Thiếu khả năng hành động nhanh',
      description: 'Họ thích phân tích, suy ngẫm và cân nhắc kỹ lưỡng. Nhưng đôi khi, cuộc sống cần hành động ngay lập tức – điều mà họ phải cố gắng nhiều hơn để bắt nhịp kịp.'
    }
  ],

  A: [
    {
      title: 'Thiếu tổ chức',
      description: 'Người nhóm Artistic sống theo cảm hứng, như một cơn gió tự do không bị bó buộc bởi lịch trình hay khuôn mẫu. Nhưng chính điều đó lại khiến họ dễ rơi vào trạng thái hỗn loạn, chậm trễ hoặc quên mất những trách nhiệm quan trọng trong cuộc sống thực tế.'
    },
    {
      title: 'Khó thích nghi với khuôn mẫu',
      description: 'Họ luôn tìm kiếm sự độc đáo, do đó môi trường có quá nhiều quy tắc, thủ tục và trật tự khiến họ cảm thấy ngột ngạt. Khi bị ép tuân theo những tiêu chuẩn cứng nhắc, họ trở nên mất động lực và dễ nổi loạn.'
    },
    {
      title: 'Dễ bị cảm xúc chi phối',
      description: 'Tâm hồn nhạy cảm khiến họ sống trọn vẹn với cảm xúc, nhưng cũng đồng nghĩa với việc họ dễ bị tổn thương, dao động hay rơi vào trạng thái trầm lắng khi gặp áp lực hoặc lời phê bình.'
    },
    {
      title: 'Thiếu thực tế',
      description: 'Trong hành trình bay theo lý tưởng sáng tạo, đôi khi họ quên mất mặt đất. Họ có thể ấp ủ những dự án tuyệt vời nhưng lại thiếu kế hoạch cụ thể để thực hiện trong thực tế.'
    },
    {
      title: 'Không kiên trì với công việc lặp lại',
      description: 'Sự đơn điệu là kẻ thù của họ. Những công việc mang tính lặp đi lặp lại khiến họ cạn kiệt cảm hứng nhanh chóng và mất tập trung vào mục tiêu dài hạn.'
    }
  ],
  S: [
    {
      title: 'Dễ bị ảnh hưởng bởi người khác',
      description: 'Sự đồng cảm cao khiến họ thấu hiểu và quan tâm người khác, nhưng đôi khi lại đánh mất lập trường cá nhân. Họ có thể thay đổi quyết định chỉ vì không muốn ai đó buồn lòng.'
    },
    {
      title: 'Tránh xung đột',
      description: 'Họ khao khát hòa bình và sự hài hòa trong các mối quan hệ đến mức sẵn sàng im lặng hoặc nhún nhường, kể cả khi điều đó bất lợi cho bản thân.'
    },
    {
      title: 'Thiếu sự quyết đoán',
      description: 'Họ luôn cân nhắc cảm xúc của mọi người, dẫn đến việc chần chừ, do dự và không thể đưa ra lựa chọn dứt khoát khi cần.'
    },
    {
      title: 'Dễ bị kiệt sức cảm xúc',
      description: 'Khi luôn đóng vai trò người lắng nghe và hỗ trợ, họ dần trở nên mệt mỏi, cạn kiệt năng lượng cảm xúc mà không có thời gian hồi phục cho bản thân.'
    },
    {
      title: 'Khó nói “không”',
      description: 'Sự tử tế khiến họ dễ dàng nhận lời giúp đỡ, ngay cả khi bản thân đã quá tải. Việc từ chối trở thành một thử thách tâm lý đầy áy náy.'
    }
  ],
  E: [
    {
      title: 'Tham vọng quá mức',
      description: 'Người nhóm Enterprising luôn hướng đến đỉnh cao, nhưng chính khát khao không ngừng nghỉ ấy có thể biến thành áp lực đè nặng lên họ và cả những người xung quanh.'
    },
    {
      title: 'Thích kiểm soát',
      description: 'Họ có tố chất lãnh đạo mạnh mẽ, nhưng đôi khi lại áp đặt quan điểm và điều khiển quá mức, khiến người khác cảm thấy ngột ngạt hoặc bị lu mờ.'
    },
    {
      title: 'Ít kiên nhẫn',
      description: 'Họ muốn mọi thứ diễn ra nhanh chóng. Sự chậm trễ, trì hoãn hay vòng vo khiến họ bực bội và khó giữ bình tĩnh.'
    },
    {
      title: 'Dễ sa đà vào cạnh tranh',
      description: 'Tinh thần thi đua cao khiến họ dễ biến mọi thứ thành cuộc đua. Họ có thể mạo hiểm quá đà hoặc trở nên lạnh lùng nếu chỉ tập trung vào chiến thắng.'
    },
    {
      title: 'Tập trung vào thành tích',
      description: 'Họ đánh giá thành công qua con số và kết quả cụ thể, đôi khi quên mất những giá trị mềm như sự hài lòng, tình cảm và ý nghĩa sâu xa của công việc.'
    }
  ],
  C: [
    {
      title: 'Cứng nhắc',
      description: 'Người nhóm Conventional yêu quy tắc và trật tự. Nhưng chính điều đó lại khiến họ thiếu linh hoạt trong môi trường sáng tạo hoặc thay đổi nhanh.'
    },
    {
      title: 'Thiếu sáng tạo',
      description: 'Họ quá trung thành với quy trình đến mức không dám phá cách. Khi đối mặt với thử thách cần đổi mới, họ có thể lúng túng và mất phương hướng.'
    },
    {
      title: 'Lo lắng khi thiếu trật tự',
      description: 'Họ cảm thấy bất an trong môi trường thiếu cấu trúc rõ ràng. Một lịch làm việc rối loạn, thay đổi thất thường có thể khiến họ căng thẳng liên tục.'
    },
    {
      title: 'Lệ thuộc vào chỉ dẫn',
      description: 'Họ thường chờ đợi hướng dẫn rõ ràng từ cấp trên hoặc quy trình, và khó chủ động trong tình huống đòi hỏi sáng tạo hoặc quyết định độc lập.'
    },
    {
      title: 'Quá tỉ mỉ',
      description: 'Sự chú trọng vào từng chi tiết khiến họ mất thời gian vào việc nhỏ nhặt, đôi khi bỏ lỡ tổng thể hoặc làm giảm hiệu quả công việc.'
    }
  ]
};
export default hollandWeaknesses;
