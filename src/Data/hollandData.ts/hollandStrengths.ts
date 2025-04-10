const hollandStrengths: Record<string, { title: string; description: string }[]> = {
  R: [
    {
      title: 'Khả năng vận động, kỹ thuật',
      description: 'Những người thuộc nhóm Realistic thường sở hữu đôi tay khéo léo và tư duy thực hành mạnh mẽ. Họ không ngần ngại bắt tay vào việc, tháo tung một chiếc máy và lắp lại nó chỉ bằng trực giác và kinh nghiệm. Đối với họ, cảm giác chạm vào công cụ, vật liệu hay máy móc là điều mang lại sự hứng khởi và cảm giác làm chủ thế giới vật chất.'
    },
    {
      title: 'Tư duy thực tế',
      description: 'Không bị cuốn vào những mơ mộng xa vời, người nhóm R nhìn cuộc sống qua lăng kính logic, đơn giản và hiệu quả. Họ không thích vòng vo hay lý thuyết rối rắm — mà thay vào đó, luôn đi thẳng vào trọng tâm vấn đề bằng giải pháp cụ thể và rõ ràng.'
    },
    {
      title: 'Kiên trì, bền bỉ',
      description: 'Dù là giữa trưa nắng hay trong xưởng đầy tiếng ồn, họ vẫn bền bỉ làm việc không phàn nàn. Họ là những người có thể lặp đi lặp lại một thao tác hàng trăm lần mà không nản lòng — bởi vì trong họ là tinh thần thép và lòng yêu lao động.'
    },
    {
      title: 'Hành động quyết đoán',
      description: 'Họ không thích nói quá nhiều. Họ là mẫu người "nói ít, làm nhiều" – phản ứng nhanh, dứt khoát và đầy sức sống. Khi người khác còn đang tranh luận, họ đã bắt đầu hành động.'
    },
    {
      title: 'Thích hoạt động ngoài trời',
      description: 'Không gian mở, gió trời, nắng gắt hay đất cát – tất cả là môi trường sống lý tưởng với họ. Họ yêu sự tự do của thiên nhiên hơn là sự gò bó nơi văn phòng kín bưng.'
    }
  ],

  I: [
    {
      title: 'Tư duy phân tích',
      description: 'Họ là những người đào sâu từng lớp vấn đề như một nhà khoa học nghiên cứu DNA. Họ không thoả mãn với bề nổi mà luôn tìm kiếm câu trả lời bên trong những con số, mô hình và dữ liệu.'
    },
    {
      title: 'Giải quyết vấn đề phức tạp',
      description: 'Càng gặp bài toán khó, họ càng hứng thú. Những khối rubik tư duy, những câu hỏi hóc búa – với họ, đó là trò chơi kích thích trí não và thắp sáng sự sáng tạo logic.'
    },
    {
      title: 'Độc lập và sáng suốt',
      description: 'Người nhóm I không cần ai thúc đẩy. Họ tự tạo động lực bằng sự tò mò và niềm yêu thích tri thức. Sự bình tĩnh, quan sát sắc bén và góc nhìn khách quan giúp họ luôn điềm tĩnh trong mọi tình huống.'
    },
    {
      title: 'Tư duy học thuật',
      description: 'Họ đọc sách như ăn cơm, say mê trong thư viện như lạc vào thế giới riêng. Tri thức với họ không chỉ là công cụ, mà là niềm vui và một phần bản thể.'
    },
    {
      title: 'Yêu thích sự khám phá',
      description: 'Họ có thể dành hàng giờ chỉ để nghiên cứu sự sống của một loài cá hiếm, hoặc xem cấu trúc của một hành tinh xa xôi. Với họ, mỗi ngày là một chuyến phiêu lưu của trí tuệ.'
    }
  ],

  A: [
    {
      title: 'Sáng tạo vô biên',
      description: 'Tâm trí của họ là một bầu trời tràn đầy sắc màu, nơi ý tưởng bay lượn như đàn chim không ngừng nghỉ. Họ nhìn thấy nghệ thuật trong từng chiếc lá rơi, từng tiếng gió thổi – và luôn muốn tạo ra điều gì đó chưa từng tồn tại.'
    },
    {
      title: 'Cảm thụ nghệ thuật',
      description: 'Âm nhạc, hội họa, thơ ca – với họ, mọi thứ đều có thể khiến con tim rung động. Họ có khả năng cảm nhận cái đẹp tinh tế đến từng chi tiết mà người khác thường bỏ qua.'
    },
    {
      title: 'Tự do thể hiện bản thân',
      description: 'Họ không ngại khác biệt. Ngôn từ, nét vẽ, điệu nhảy – tất cả đều là ngôn ngữ để họ bộc lộ tâm hồn và kể câu chuyện riêng của mình với thế giới.'
    },
    {
      title: 'Trí tưởng tượng phong phú',
      description: 'Tưởng tượng với họ là nguồn sống. Họ có thể biến một căn phòng trống thành một sân khấu, hoặc một câu chuyện đời thường thành một bản ballad đầy cảm xúc.'
    },
    {
      title: 'Nhạy cảm với cảm xúc',
      description: 'Họ dễ đồng cảm với nỗi buồn của người khác, tinh tế nhận ra cảm xúc dù chưa thốt ra thành lời – như một nghệ sĩ cảm nhận sự thay đổi tinh tế trong sắc độ ánh sáng.'
    }
  ],

  S: [
    {
      title: 'Đồng cảm và vị tha',
      description: 'Họ đặt trái tim mình vào từng mối quan hệ. Dù là người xa lạ hay bạn bè thân thiết, họ luôn sẵn lòng lắng nghe và chia sẻ bằng cả tấm lòng.'
    },
    {
      title: 'Giao tiếp thân thiện',
      description: 'Họ có khả năng biến cuộc trò chuyện đơn giản trở nên sâu sắc. Sự hiện diện của họ khiến người khác cảm thấy an toàn, được hiểu và được chấp nhận.'
    },
    {
      title: 'Làm việc nhóm xuất sắc',
      description: 'Trong nhóm, họ là chất keo kết nối mọi người. Họ biết nhường nhịn, hỗ trợ, và luôn đặt lợi ích tập thể lên trước cá nhân.'
    },
    {
      title: 'Kiên nhẫn với con người',
      description: 'Họ sẵn sàng giải thích lần thứ ba cho người không hiểu, hoặc ở lại sau giờ chỉ để giúp đỡ một người bạn đang rối bời.'
    },
    {
      title: 'Tận tâm trong giúp đỡ',
      description: 'Họ không chỉ giúp vì trách nhiệm mà vì thật lòng mong muốn người khác tốt hơn, khỏe hơn, hạnh phúc hơn.'
    }
  ],

  E: [
    {
      title: 'Khả năng lãnh đạo tự nhiên',
      description: 'Họ không cần phải nói nhiều để người khác nghe theo. Bằng năng lượng tích cực và tầm nhìn rõ ràng, họ truyền cảm hứng và dẫn dắt đội nhóm vững vàng.'
    },
    {
      title: 'Tự tin và quyết đoán',
      description: 'Họ không ngại đứng trước đám đông, trình bày ý tưởng hay đưa ra quyết định quan trọng. Ánh mắt của họ luôn toát lên niềm tin và sự chủ động.'
    },
    {
      title: 'Thuyết phục linh hoạt',
      description: 'Họ biết nói đúng điều cần nói, vào đúng thời điểm. Với họ, kỹ năng giao tiếp không chỉ là nghệ thuật – mà là chiến lược để thúc đẩy hành động.'
    },
    {
      title: 'Tinh thần chinh phục',
      description: 'Thử thách không làm họ lùi bước, mà như ngọn lửa kích thích tinh thần cạnh tranh và quyết tâm chiến thắng.'
    },
    {
      title: 'Chịu trách nhiệm cao',
      description: 'Họ không trốn tránh trách nhiệm. Khi có việc cần, họ sẽ là người đứng ra nhận phần khó nhất, và hoàn thành nó với lòng tự hào.'
    }
  ],

  C: [
    {
      title: 'Tỉ mỉ từng chi tiết',
      description: 'Họ nhìn thấy lỗi chính tả trong 100 trang văn bản, nhận ra số sai trong báo cáo tài chính — vì với họ, sự chính xác là nguyên tắc sống.'
    },
    {
      title: 'Khả năng tổ chức tuyệt vời',
      description: 'Họ sắp xếp mọi thứ theo cách khoa học đến ngạc nhiên. Dữ liệu, công việc, thời gian – mọi thứ đều ở đúng chỗ và đúng lúc.'
    },
    {
      title: 'Tuân thủ quy trình',
      description: 'Họ tin vào hệ thống và quy trình. Với họ, hiệu quả bền vững đến từ sự nghiêm túc, không vội vàng và tôn trọng cấu trúc.'
    },
    {
      title: 'Chính xác và đáng tin cậy',
      description: 'Giao việc cho họ là yên tâm. Dù là công việc đơn điệu hay phức tạp, họ sẽ hoàn thành đúng hạn và đúng yêu cầu – thậm chí còn hơn thế.'
    },
    {
      title: 'Ổn định trong công việc',
      description: 'Không bị cảm xúc chi phối, họ duy trì phong độ ổn định. Là nhân tố nền tảng trong mọi tập thể, họ mang lại cảm giác an toàn và tin cậy.'
    }
  ]
};

export default hollandStrengths;
